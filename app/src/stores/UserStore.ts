import { action, makeAutoObservable, observable } from "mobx";

let userCount = 0;

type User = {
    id: number
    name: string
}

export class UserStore {
    user: User | null = null;

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

        return true
    })
}

export const userStore = new UserStore();