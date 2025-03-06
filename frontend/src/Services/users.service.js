import http from "../http-common";

class UsersDataService{
    getAll() {
        return http.get("/users");
    }
}
const usersDataService = new UsersDataService();
export default usersDataService;
