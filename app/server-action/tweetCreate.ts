'use server'

export async function Post(formData:FormData) {
    const content = formData.get('content')
    console.log(content)
}