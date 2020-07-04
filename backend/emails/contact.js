const keys = require('../keys');

module.exports = function (name, email, message) {
    if (!email) {
        return {
            to: 's.komandyrchyk@gmail.com',
            from: 'Nazar',
            subject: keys.EMAIL_FROM,
            html: `
                <h3>Новий відгук від ${name}:</h3>
                <p>${message}</p>
                <hr />
                <p>На жаль, користувач не залишив зворотньої адреси</p>
                <br />
                <p>Лю тя*</p>
                <p>Твій сайт</p> `
        }
    }
    return {
        to: 's.komandyrchyk@gmail.com',
        from: keys.EMAIL_FROM,
        subject: 'Новий відгук',
        html: `
            <h3>Новий відгук від ${name}:</h3>
            <p>${message}</p>
            <hr />
            <p>Якщо хочеш відповісти - ${email}</p>
            <br />
            <p>Лю тя*</p>
            <p>Твій сайт</p> `
    }
}