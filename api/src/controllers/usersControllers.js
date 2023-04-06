const { Car, User } = require('../db')

const getUsersDb = async () => {
    return await User.findAll()
}

const getUserDbId = async (userId) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.userId == userId);

    return filteredUsers
}

const getUserDb = async (empresa) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.empresa.toLowerCase().includes(empresa.toLowerCase()));

    return filteredUsers
}

const getUserName = async (name) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));

    return filteredUsers
}

const createUserDb = async (nickname, empresa, name, picture) => {
    if (!nickname) return "Missing nickname";
    if (!empresa) return "Missing empresa";
    if (!name) return "Missing name";
    if (!picture) return "Missing picture";
    
    try {
        let searchUser = await User.findOne({
            where: { name: name }
        });
    if (searchUser) return "Existing user";
    let userCreate = await User.create({ nickname, empresa, name, picture });
        return userCreate;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateToUser = async (userId, user) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    await searchUser.update({...user});
    return ('User updated');
}


const deleteToUser = async (userId) => {
    if(!userId) return ('You need to login for delete')
    let user = await User.findOne({
        where: { userId: userId }
    });
    if(!user) return ('This user does not exist')
    await user.destroy();
    return ('User deleted')
}

module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb,
    getUserName,
    deleteToUser,
    updateToUser,
    getUserDbId
};