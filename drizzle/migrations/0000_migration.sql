CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  kind text NOT NULL CHECK (char_length(kind) <= 40),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  title text CHECK (char_length(title) <= 120),
  org text CHECK (char_length(org) <= 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  sector text CHECK (char_length(sector) <= 80),
  message text CHECK (char_length(message) <= 2000),
  details jsonb
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);