import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oaumapnocabcejvdemis.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdW1hcG5vY2FiY2VqdmRlbWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzkwMjksImV4cCI6MjAwMjUxNTAyOX0.gJbhkZZb1tolHfzU57uux7ZloDnYIZHxa_I2LXe3s6Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
