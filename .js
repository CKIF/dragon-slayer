var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and dealed " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if (totalDamage === 5) {
            console.log("Critical hit! You've defeated the monster! This princess's already waiting for you!");
            slaying = false;
        } else if (totalDamage >= 4) {
            console.log("You've defeated the monster! This princess's already waiting for you!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You missed... The dragon burries you... You are defeated");
        slaying = false;
    }
}
