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
}

export default UsersTableController;
