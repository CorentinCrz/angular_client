export interface UserModel{
    first_name?: string,
    last_name?: string,
    email: string,
    password: string,
    password_repeate?: string,
    street?: string,
    city?: string,
    zip_code?: string,
    country?: string,
    birthdate?: string,
    position?: string,
    type?: string,
    cgu?: boolean
}