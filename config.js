// Verbindung zu deiner eigenen (kostenlosen) Supabase-Datenbank.
// Trag hier die beiden Werte aus Supabase ein: Project Settings → API.
// Der «anon public» Schlüssel darf öffentlich sein – deine Daten schützt die Anmeldung
// und die Zugriffsregel in der Datenbank (jede Person sieht nur ihre eigenen Daten).
// Leer lassen = die App fragt beim ersten Start danach.
window.MB_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: ''
};
