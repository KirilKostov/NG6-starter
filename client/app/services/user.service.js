export default

class UserService {
    constructor($http, $timeout, $q) {
        "ngInject";
        this.$http = $http;
        this.$timeout = $timeout;
        this.$q = $q;

    }
    getUsers() {
        return this.$http.get('users.json').then(response => response.data);
    }

    createUser(user) {
        return this._resetCallSim(user);
    }
    editUser(user) {
        return this._resetCallSim(user);
    }
    deleteUser(user) {
        return this._resetCallSim(user);
    }

    _resetCallSim(user) {
        let defer = this.$q.defer();
        setTimeout(() => {
            defer.resolve(user)
        }, 500);
        return defer.promise;

    }
}
