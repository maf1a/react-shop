import { action, makeAutoObservable, observable } from "mobx";

let userCount = 0;

type User = {
    id: number
    name: string
}

const getUserFromLocalStorage = () => {
    const json = localStorage.getItem("user")
    if (json === null) return null
    
    return JSON.parse(json) as User
}

export class UserStore {
    user: User | null = getUserFromLocalStorage();

    constructor() {
        makeAutoObservable(this);
    }

    hasMoreThanFiveLetters(input: string): boolean {
        return input.replace(/[^a-zA-Z]/g, '').length > 0
    }

    create = action((name: string): boolean => {
        if (this.hasMoreThanFiveLetters(name) === false) {
            return false
        }

        this.user = {
            name,
            id: userCount
        }

        localStorage.setItem("user", JSON.stringify(this.user))
        return true
    })

    logOut = action(() => {
        this.user = null
        localStorage.removeItem("user")
        return true
    })
}

export const userStore = new UserStore();