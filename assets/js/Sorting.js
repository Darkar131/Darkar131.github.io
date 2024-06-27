//Sorting Algorithm, use for Alphabetically sort courses from A to Z
document.addEventListener("DOMContentLoaded", function() {
            sortList();
        });

        function sortList() {
            var list, i, switching, b, shouldSwitch;
            list = document.getElementById("sortingby");
            switching = true;
            while (switching) {
                switching = false;
                b = list.getElementsByTagName("LI");
                for (i = 0; i < (b.length - 1); i++) {
                    shouldSwitch = false;
                    if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        }
