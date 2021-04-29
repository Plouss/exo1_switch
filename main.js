let jour = prompt('Veuillez saisir un jour');

switch (jour) {
    case "lundi":
        alert("j'ai cours et au soir je révise");
        break;
    case "mardi":
        alert("c'est mardi");
        break;
    case "mercredi":
        alert("j'ai restaurant");
        break;
    case "jeudi":
        alert("j'ai piscine");
        break;
    case "vendredi":
        alert("j'ai gym");
        break;
    case "samedi":
        alert("je dors");
        break;
    case "dimanche":
        alert("j'ai église");
        break;
    default:
        alert('veuillez taper un jour de la semaine');
        break;
    }