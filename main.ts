controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(horse, 100, 100)
    controller.moveSprite(death, 39, 80)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    death = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ........ffffffff..............
        ......fffdd22d2ff.............
        ....fffddffff2f22f............
        ...fddddf........2............
        ...fddff...fffffff............
        ..fffff....ffbbbbbff..........
        ...fff......fbbbbbbbf.........
        ....fff.....fbbbbbbbbf........
        .....fff....fbbbfffffbf.......
        ......fff...fbbf11111ff.......
        .......fff..fbbf1f1f1ff.......
        ........fff.fbbf11111ff.......
        .........ffffbbbf111fbf.......
        ..........fffbbbf1f1fbf.......
        ..........fffffffffffff.......
        ..........ffffbfbbbbff........
        .........ffbbbbffbbff.........
        ..f.....ffffbbffffbf..........
        ..fffffffbbffffbbfff..........
        ..ffbbbbbbbbbbbbbfff..........
        ...fffbbbbbbbbffff............
        .....ffffffffff...............
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Enemy)
})
let death: Sprite = null
let horse: Sprite = null
scene.setBackgroundColor(12)
scene.cameraFollowSprite(horse)
horse = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ...............................e........
    ..............................feff......
    ...........................ffffffff.....
    ..........................ffeeeeeef.....
    .........................ffeeeeeee......
    ........................ffeeeeeeee......
    .......................ffeeeeeeefe......
    ......................feeeeeeeeeee......
    ...........eeeeeeee..eeeeeeeeeeeee......
    .......fffeeeeeeeeeeeeeeeeeeeeeeee......
    ......fffeeeeeeeeeeeeeeeeeeee.eeee......
    ......ffeeeeeeeeeeeeeeeeeeeee..eef......
    ......ffeeeeeeeeeeeeeeeeeeeee..fff......
    ......ffeeeeeeeeeeeeeeeeeeeee...ff......
    ......ffeeeeeeeeeeeeeeeeeeeee...........
    .....ff..eeeeeeeeeeeeeeeeeeee...........
    .....ff...eeeeeee......eeeeee...........
    ..........eeee...........eeee...........
    ..........eeee.............ee...........
    ...........ee..............ee...........
    ...........ee..............ee...........
    ...........ee..............ee...........
    ...........ee..............ee...........
    ...........ee..............ee...........
    ...........ff..............ff...........
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
