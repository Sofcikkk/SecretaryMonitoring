import http from "../http-common";

class UsersDataService{
    getAll() {
        let a = http.get("/users")
        console.log(a)
        return http.get("/users");
    }
}
const usersDataService = new UsersDataService();
export default usersDataService;
