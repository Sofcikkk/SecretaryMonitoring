import http from "../http-common";

class UsersDataService{
    getAll() {
        return http.get("/users");
    }
}
export default new UsersDataService()
