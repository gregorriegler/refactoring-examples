// names

class test {
    st;
    fl;

    cwe(fl, dir) {
        if (!(dir === U && fl >= this.fl || dir === D && fl <= this.fl)) {
            this.st.push(fl);
        } else {
            let i = 0;
            while (i < this.st.length) {
                if (this.gUp() && this.st[i] > fl
                    || this.gDn() && this.st[i] < fl) {
                    break;
                }
                i++;
            }
            this.st.splice(i, 0, fl);
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// accidental nesting

function isWelcome(string) {
    if (string !== undefined) {
        if (string.contains('hello')) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// --> degenerate exit clauses to the top !

function isWelcome(string) {
    if (string === undefined) return false;

    if (string.contains('hello')) {
        return true;
    } else {
        return false;
    }
}

// --> or maybe like this ?

function isWelcome(string) {
    return string !== undefined && string.contains('hello');
}

// ---------------------------------------------------------------------------------------------------------------------
// magic numbers

for (i = 0; i < 52; i++) {
    j = i + randomInt(53 - i) - 1
    swapEntries(i, j)
}

// -->

const deckSize = 52;

for (i = 0; i < deckSize; i++) {
    j = i + randomInt(deckSize + 1 - i) - 1
    swapEntries(i, j)
}

// ---------------------------------------------------------------------------------------------------------------------
// lots of params -> Connascence of Position

function sendEmail(firstName, lastName, email, subject, body, attachments = undefined) {
    // ...
}

// -->

function sendEmail(recipient, mail) {
    // ...
}

sendEmail({
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.muster@mail.com"
}, {
    subject: "The Subject",
    body: "The Message"
})
