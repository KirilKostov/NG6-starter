class UsersTableController {
    constructor() {
        this.resetForm();
    }
    addNewUser(newUser) {
        if (this.userForm.$invalid) {
            alert('Form is invalid!');
            return;
        }
        this.onNewUserAdded({ newUser });
    }
    deleteUser(user) {
        this.onUserDeleted({ user });
    }
    startEditing(user) {
        user.isEdited = true;
    }
    editUser(user) {
        this.onUserEdited({ user });
    }
    resetForm() {
        this.newUser = {
            name: null,
            phone: null,
            dob: null
        };
    }

    $onChanges() {
        this.resetForm();
    }

    averageAge() {
        return this.users.map(u => this._calculateAge(u.dob)).reduce((a, b) => a + b, 0) / this.users.length;
    }
    _calculateAge(birthday) {
        const birthdate = new Date(birthday);
        const today = new Date();
        let age = ((today - birthdate) / (31557600000));
        age = Math.floor(age);
        return age;
    }
}

export default UsersTableController;
