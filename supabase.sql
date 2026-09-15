-- Run this once in your Supabase project's SQL editor.

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table messages enable row level security;

-- No public policies are added on purpose: the contact form writes to this
-- table using the service role key from a server-only API route, so it
-- never needs to be readable or writable directly from the browser.
