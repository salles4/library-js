import supabase from "../scripts/supabase.js";

const { data, error } = await supabase.rpc('hello_world')
console.log(data);