export class Random {

    public static getInt(max: number = 1): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static getString(length: number = 10): string {
        var randomizedString = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters_length = characters.length;
        for ( var i = 0; i < length; i++ ) {
            randomizedString += characters.charAt(Random.getInt(characters_length));
        }
        return randomizedString;
    }

    public static getUniqueId(): string {
        var date = Date.now();
        var number = Math.floor(Math.random() * 100);
        var string = Random.getString(10);
        var id = date + number + string;
        var id_length = id.length;
        return date + '-' +
            number + '-' +
            string + '-' +
            id.charAt(Random.getInt(id_length)) +
            id.charAt(Random.getInt(id_length));
    }
}