class Food {
    constructor(public name: string, public toppings: string[]) {}
}

const pizzaConst = new Food('Inferno', ['Pizza', 'Burger']);
console.log(pizzaConst);

interface Food {
    name: string;
    toppings: string[];
}

interface Mailable {
    send(email: string,after: number): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string,after: number): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
var M=new Mail();
console.log("Later: "+M.later("abc@gmail.com",3));
console.log("Send: "+M.send("xyz@gmail.com",3));
console.log("Queue: "+M.queue("aa@gmail.com"));