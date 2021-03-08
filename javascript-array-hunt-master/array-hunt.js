$(document).ready(function () {
    let australianAnimals = ["bandicoot", "crocodile", "dingo", "echidna",
        "frilled-dragon", "kangaroo", "koala", "ostrich", "platypus",
        "striped-possum", "tasmanian-devil", "wombat"];
    let chineseFood = ["bao", "chow-mein", "dumplings", "egg-rolls",
        "fortune-cookies", "fried-rice", "gyoza", "lo-mein", "mapo-tofu",
        "ramen", "shumai", "wonton-soup"];
    let dinosaurs = ["ankylosaurus", "brachiosaurus", "dilophosaurus",
        "pachycelphalosaurus", "pterodactyl", "stegosaurus",
        "styracosaurus", "triceratops", "tyrannosaurus-rex",
        "velociraptor"];
    let solarSystem = ["earth", "jupiter", "luna", "mars", "mercury",
        "neptune", "saturn", "sol", "uranus", "venus"];

    $("#imageSet").change(showAllImages);
    $("#huntButton").click(arrayHunt);

    showAllImages();

    function showAllImages() {
        // What image set was selected? This is the directory name
        let directoryName = $("#imageSet").val();
        // Based on the selection, use the correct array
        let arrayOfImagesNames = getSelectedArray();

        // Empty out any children from the div
        let imageDiv = $("#originalArray").empty();

        // Make two rows of images, half in each row
        let half = arrayOfImagesNames.length / 2;
        // How many images are in the current row?
        let count = 0;
        // The current <div class="row">
        let row;

        for (let fileName of arrayOfImagesNames) {
            // Time to make a new row?
            if (count === 0 || count >= half) {
                row = $("<div>").addClass("row");
                imageDiv.append(row);
                count = 0;
            }
            // append a <figure> with the image and its caption
            row.append(createImage(directoryName, fileName));
            count++;
        }

    }

    function createImage(directory, fileName) {
        // Create a div with a Bootstrap class
        let col = $("<div>").addClass("col");
        // Create a figure (can have a caption)
        let figure = $("<figure>").addClass("figure");
        col.append(figure);

        // Create the image itself
        let img = $("<img>");
        img.attr("src", `${directory}/${fileName}.png`);
        img.attr("alt", fileName);

        // Add the image to the figure
        figure.append(img);

        // Create a caption
        let caption = $(`<figcaption>${fileName}</figcaption>`)
            .addClass("figure-caption text-center");
        figure.append(caption);

        return col;
    }

    function getSelectedArray() {
        // Which image set was selected?
        let selection = $("#imageSet").val();

        // Return the array that corresponds to
        // the selected string
        if (selection === "chinese")
            return chineseFood;
        else if (selection === "solar")
            return solarSystem;
        else if (selection === "dinos")
            return dinosaurs;
        else if (selection === "aussie")
            return australianAnimals;
    }

    function arrayHunt() {
        let myArray = getSelectedArray();

        /*
        Find the first and last string in the array.
        Output them to td#firstLast
         */
        let first = myArray[0];
        let count = myArray.length;
        let last = myArray[count - 1];

        $("td#firstLast").text(first + " " + last);


        /*
        Find the first string that contains an 'n'.
        Output it to td#firstEnn
         */
        let message2 = "";
            for (let i = 0; i < myArray.length; i++) {
                let word = myArray[i];
                if (word.includes("n" || "N") && message2 === "") {
                    message2 = word

                }
            }
        $("td#firstEnn").text(message2);

        /*
        Find all of the strings with less than 6 characters.
        Output them to td#lessThanSix
         */
        let message = "";
        for(let i = 0; i < myArray.length; i++)
        {
            let word = myArray[i];
            if(word.length < 6)
            {
                message = word + " " + message;
            }
        }
        $("td#lessThanSix").text(message);


        /*
        Find the longest string in the array.
        Output it to td#longName
         */
        let message3 = "";
        for(let i = 0; i < myArray.length - 1; i++)
        {
            let word = myArray[i];
            if(word.length > message3.length)
            {
                message3 = word;
            }
        }
        $("td#longName").text(message3);

        /*
        Find all of the strings that do not contain the letter 's'.
        Output them to td#noEss
         */
        let message4 = "";
        for(let i = 0; i < myArray.length; i++)
        {
            let word = myArray[i];
            if(!word.includes("s" || "S"))
            {
                message4 += word + " ";
            }
        }
        $("td#noEss").text(message4);


        /*
        Output all of the strings, but with all of their vowels
        in uppercase, to td#upperVowels
         */
        let message5 = "";
        for(let i = 0; i < myArray.length; i++)
        {
            let word = myArray[i];
            let newWord = "";
            if(word.toUpperCase().includes("A" || "E" || "I" || "O" || "U"))
            {
                for(let j = 0; j < word.length; j++){
                    let letter = word.charAt(j);
                    if(letter === "A" ||letter === "E" ||letter === "I" ||letter === "O" ||letter === "U")
                    {
                        newWord += word.charAt(j).toUpperCase();
                    }else{
                        newWord += word.charAt(j);
                    }

                }

            }
            message5 += newWord + " ";
        }
        $("td#upperVowels").text(message5);

        /*
        Output all of the strings in reverse order and separated by
        ' - ' to td#reverseDash
         */
        let message6 =""
        const reversed = myArray.reverse();
        for(let i = 0; i < myArray.length; i++)
        {
            let word = myArray[i];
            message6 += word + "-"
        }
        $("td#reverseDash").text(message6);
    }

});