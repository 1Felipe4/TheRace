class race{
    static count = 0;
    constructor(name, animals = []){
        this.name = name;
        this.animals = animals;
        this.leaderboard = $("<table class='leaderboard__table'> </table>");
        this.places = [];
        this.finished = false;
        race.count++;
        this.$node = function(){
            this.genLeaderboard();
            let node = $("<div class='leaderboard'> </div>")
            node.attr("id", this.name)
            node.append("<h3>" + this.name + "</h3>");
            node.append(this.leaderboard);
            return node;
        }

        this.genLeaderboard = function() {
            this.leaderboard.html("<tr><th>Placed</th> <th>Animal</th> <th>Name</th></tr>");
            let count = 0;
            this.places.forEach(animal => {
                count++;
                let tier ="";
                switch(count){
                    case 1: tier = "gold"
                    break;
                    case 2: tier = "silver"
                    break;
                    case 3: tier = "bronze";
                    break;
                    default: tier = "normal";

                }
                let row = $("<tr> </tr>");
                row.addClass("leaderboard__row--" + tier);
                row.addClass("leaderboard__row");
                let placed = $("<td class='leaderboard__td'> </td>");
                let aniInfo = $("<td class='leaderboard__td'> </td>");
                let name = $("<td class='leaderboard__td'> </td>");
                let color = $("<p class='leaderboard__color-box'> </p>");
                color.css("background-color", animal.color);
                let $img = animal.$img.clone();
                $img.addClass("leaderboard__img");

                placed.append("#" + count);
                aniInfo.append(color);
                aniInfo.append($img);
                name.append(animal.name);

                row.append(placed);
                row.append(aniInfo);
                row.append(name);

                this.leaderboard.append(row);

            });

            
        }
    }

    
}