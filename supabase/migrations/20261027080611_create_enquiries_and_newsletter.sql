/*
# Create enquiries and newsletter_subscriptions tables

1. New Tables
- `enquiries`: Stores submissions from the Contact form and Plan Your Retreat multi-step workflow.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text, nullable)
  - city (text, nullable)
  - enquiry_type (text, nullable) — e.g. "general", "booking", "programme"
  - preferred_dates (text, nullable)
  - number_of_guests (int, nullable)
  - wellness_interests (text, nullable)
  - accommodation_preference (text, nullable)
  - additional_requirements (text, nullable)
  - message (text, nullable)
  - consent (boolean, default true)
  - status (text, default 'new')
  - created_at (timestamptz, default now())
- `newsletter_subscriptions`: Stores email subscriptions from the footer newsletter form.
  - id (uuid, primary key)
  - email (text, unique, not null)
  - created_at (timestamptz, default now())

2. Security
- This is a no-auth public website — the browser uses the anon key.
- Enable RLS on both tables.
- Grant INSERT to anon + authenticated (the public can submit enquiries and subscribe).
- Grant SELECT/UPDATE/DELETE only to authenticated (staff/admin management).
- No user_id columns — single-tenant public submission model.
- Policies allow anyone (anon) to INSERT but only authenticated users to read/manage.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  city text,
  enquiry_type text,
  preferred_dates text,
  number_of_guests int,
  wellness_interests text,
  accommodation_preference text,
  additional_requirements text,
  message text,
  consent boolean DEFAULT true,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON enquiries TO authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries"
ON enquiries FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries"
ON enquiries FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries"
ON enquiries FOR DELETE
TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON newsletter_subscriptions TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON newsletter_subscriptions TO authenticated;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter"
ON newsletter_subscriptions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_select_newsletter"
ON newsletter_subscriptions FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_delete_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_delete_newsletter"
ON newsletter_subscriptions FOR DELETE
TO authenticated USING (true);
