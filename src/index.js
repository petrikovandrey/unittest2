export default function sortHealth(list) {
    list.sort(function (a, b) {
        return b.health - a.health;
    })
    return list;
}