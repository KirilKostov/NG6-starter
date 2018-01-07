class AppController {
    constructor(UserService) {
        "ngInject";
        this.users = [];
        this.UserService = UserService;
    }
    createUser(user) {
        this.UserService.createUser(user).then(user => {
            this.users = this.users.concat(user);
        })
    }

    deleteUser(user) {
        this.UserService.deleteUser(user).then(user => {
            let _userIndex = this.users.findIndex(u => u === user);
            this.users.splice(_userIndex, 1);
        })
    }

    editUser(user) {
        this.UserService.editUser(user).then(user => {
            let _userIndex = this.users.findIndex(u => u === user);
            user.isEdited = false;
            this.users[_userIndex] = user;
        })
    }
    $onInit() {
        this.UserService.getUsers().then(users => {
            this.users = users;
        })
    }
}

export default AppController;
