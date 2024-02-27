import bcrypt from 'bcrypt';

async function passwordHash(pass) {
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(pass, salt)

    return passwordHash
}

export default passwordHash