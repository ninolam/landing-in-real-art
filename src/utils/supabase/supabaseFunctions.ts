import { CODE_UNIQUE_KEY_VIOLATION } from "./constants"
import { supabase } from "./supabaseConnection"

//------------------------------------------------------------------------------ insertEmail
export const insertEmail = async (table: string, email: string) => {
    let msgError = ''
    const { error } = await supabase
        .from(table)
        .insert({ email: email })
    if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
        msgError = 'This email already exists in our e-mail base'    
    }
    else {
        if (error) throw error  
    }
    return msgError
    }
  