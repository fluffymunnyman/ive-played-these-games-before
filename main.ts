sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    for (let index = 0; index < 2; index++) {
        player_456.setPosition(3, 50)
    }
})
let player_456: Sprite = null
player_456 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 5 4 4 5 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 2 4 4 2 4 . . . . . 
    . . . . . 4 2 2 2 2 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_456, 20, 20)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ffffff333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333ff33333333333333333333333333333333f33333ffff33333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333f3f333333333333fffffff333333333333f333333333333333333333333333333333333333333
    3333333333333333333333333333ffff3333333333333333333333f333333333333333333333333333f33f33333333333ff33333333333333333ff333333333333333333333333333333333333333333
    33333333333333333333333333ff33333333333333333333333333f333333333333333333333333333f33f3333333333f3333333333333333333f3333333333333333333333333333333333333333333
    333333333333333333333fffff33333333333333333333333333333f3333333333333333333333333f3333f333333333f3333333333333333333f3333333333333333333333333333333333333333333
    33333333333333333333f3333333333333333333333333333333333f3333333333333333333333333f3333f333333333f333333333333333333f33333333333333333333333333333333333333333333
    333333333333333333ff33333333333333333333333333333333333f333333333333333333333333f33333f333333333f333333333333333333f33333333333333333333333333333333333333333333
    333333333333333333f333333333333333333333333333333333333f333333333333333333333333f33333f333333333f333333333333333333f33333333333333333333333333333333333333333333
    33333333333333333f3333333333333333333333333333333333333f33333333333333333333333f333333f3333333333f33333333333333333ff3333333333333333333333333333333333333333333
    33333333333333333f3333333333333333333333333333333333333f33333333333333333333333f3333333f3333333333f33333333333333333f3333333333333333333333333333333333333333333
    33333333333333333f3333333333333333333333333333333333333f3333333333333333333333f33333333f3333333333f333333333333333333ff33333333333333333333333333333333333333333
    3333333333333333f33333333333333333333333333333333333333f3333333333333333333333ffffff333fff333333333ff33333333333333333fff333333333333333333333333333333333333333
    3333333333333333f33333333333333333333333333333333333333f3333333333333333333333f33333ffff3333333333333ff333333333333333333fffff3333333333333333333333333333333333
    3333333333333333f3333333333ffffffffff333333333333333333f333333333333333333333f3333333333f33333333333333ffff3333333333333333333ffffff3333333333333333333333333333
    3333333333333333f33333333333333333333f33333333333333333f333333333333333333333f3333333333f33333333333333333ff33333333333333333333333ff333333333333333333333333333
    33333333333333333f3333333333333333333f33333333333333333f333333333333333333333f3333333333f333333333333333333f333333333333333333333333f333333333333333333333333333
    33333333333333333f3333333333333333333f33333333333333333f33333333333333333333f33333333333f333333333333333333f333333333333333333333333f333333333333333333333333333
    333333333333333333ff333333333333333ff333333333333333333f33333333333333333333f33333333333f33333333333333333ff333333333333333333333333f333333333333333333333333333
    3333333333333333333f333333333333fff33333333333333333333f3333333333333333333f333333333333f3333333333333333ff3333333333333333333333333f333333333333333333333333333
    33333333333333333333f333333333ff33333333333333333333333f333333333f33333333f3333333333333f333333333333333ff3333333333333333333333333f3333333333333333333333333333
    333333333333333333333fff3333ff33333333333333333333333333ffffffffff33333333f3333333333333f333333f333333ff3333333333333333333333333fff3333333333333333333333333333
    33333333333333333333333fffff3333333333333333333333333333333333333333333333f3333333333333f3333333ffffff333333333333333fffffffffffff333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccf11ff11f
    ddddddfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff11fff
    ddddddfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff11fff
    ddddddfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222
    ddddddfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf11ff11f
    ddddddfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf11ff11f
    ddddddfccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccc222222222cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccfff11fff
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ddddddfccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccc2bbbbbbb2cccf11ff11f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333fff3333333333333333333333f33333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333ffffffffff3333333333333333333f33333333333333fff3333333333333333333333f33333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333f33333333f33333333333333333fffff333333333333fff3333333333333333333333f33333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333f33333333f333333333333333fff333f3333333333333333333333333333333333333f333333333333333fff3333333333333333333fffffffff3333333333333333333333333333333333
    333333333f333333333f33333333333333f333333f333333333333333333333333333333333333f33333333333333fff33f3333333333333333ff333333333ff33333333333333333333333333333333
    333333333f333333333f3333333333333f3333333f333333333333333333333333333333333333f3333333333333ff3333f333333333333333f333333333333ff3333333333333333333333333333333
    333333333f3333333ff3333333333333f333333333333333333333333333333333333333333333f333333333333f333333ff3333333333333f33333333333333f3333333333333333333333333333333
    333333333f333333ff3333333333333f3333333333333333333333333333333333333333333333f33333333333f33333333f333333333333f333333333333333f3333333333333333333333333333333
    33333333f33fffff33333333333333f33333333333333333333333333333333333333333333333f3333333333f333333333f333333333333f333333333333333f3333333333333333333333333333333
    33333333f3f333333333333333333f333333333333333333333333333333333333333333333333f333333333f33333333333f33333333333f333333333333333f3333333333333333333333333333333
    33333333fffffff33333333333333f333333333333333333333333333333333333333333333333f333333333f333333333333f3333333333f3333333333333ff33333333333333333333333333333333
    33333333f333333f333333333333f33333333333333333333333333f3333333333333333333333f333333333f333333333333f3333333333fff33333333ffff333333333333333333333333333333333
    33333333f3333333ff333333333f333333333333333333333333333f3333333333333333333333f3333333333ff33333333fff3333333333f33fffffffff333333333333333333333333333333333333
    33333333f333333333f33333333f33333333333333333333333333ff333333333333333ffffffff333333333333ffffffff33f33333333333f3333333333333333333333333333333333333333333333
    33333333f333333333f33333333f33333333333333333333333333f33333333333333ff3333333f3333333333333333333333f33333333333f3333333333333333333333333333333333333333333333
    33333333f3333333333f3333333f33333333333333333333333333f33333333333333f33333333f3333333333333333333333f33333333333f3333333333333333333333333333333333333333333333
    33333333f3333333333f3333333f33333333333333333333333333f33333333333333f33333333f3333333333333333333333f333333333333f333333333333333333333333333333333333333333333
    33333333f3333333333f3333333f3333333333333333333333333ff3333333333333f333333333f333333333333333333333f33333333333333f33333333333333333333333333333333333333333333
    33333333f3333333333f3333333f3333333333333333333333333f33333333333333f333333333f333333333333333333333f33333333333333f33333333333333333333333333333333333333333333
    33333333f3333333333f3333333f3333333333333333333333333f33333333333333f333333333f33333333333333333333f3333333333333333f3333333333333333333333333333333333333333333
    33333333f3333333333f3333333f3333333333333333333333333f333333333333333f33333333f33333333333333333333f33333333333333333f333333333333333333333333333333333333333333
    33333333f3333333333f3333333f3333333333333333333333333f333333333333333f33333333f3333333333f33333333f3333333333333333333f33333333333333333333333333333333333333333
    3333333ff333333333ff3333333f3333333333333333333333333f3333333333333333f3333333f3333333333f33333333f33333333333333333333fff33333333333333333333333333333333333333
    33333333ffffffffff333333333f3333333333333333333333333f3333333333333333ff333333f3333333333f3333333ff33333333333333333333333f3333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333ff33333333333333333ff33333f3ff3333333ff333333f33333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333f3333333333333333333ff3333333f33333333fff333f333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333fff3333f33333333333ffff333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333fffff333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
let deadly_glass_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
let deadly_glass_11 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    `, SpriteKind.Enemy)
player_456.setPosition(3, 50)
deadly_glass_1.setPosition(14, 59)
deadly_glass_2.setPosition(27, 59)
deadly_glass_3.setPosition(40, 45)
deadly_glass_4.setPosition(53, 59)
deadly_glass_5.setPosition(66, 45)
deadly_glass_6.setPosition(79, 45)
deadly_glass_7.setPosition(92, 59)
deadly_glass_8.setPosition(105, 45)
deadly_glass_9.setPosition(118, 59)
deadly_glass_10.setPosition(131, 45)
deadly_glass_11.setPosition(144, 45)
let barrier = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_top_10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_back = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Enemy)
let barrier_front = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Enemy)
barrier.setPosition(8, 66)
barrier_2.setPosition(24, 66)
barrier_3.setPosition(40, 66)
barrier_4.setPosition(56, 66)
barrier_5.setPosition(72, 66)
barrier_6.setPosition(88, 66)
barrier_7.setPosition(104, 66)
barrier_8.setPosition(120, 66)
barrier_9.setPosition(136, 66)
barrier_10.setPosition(152, 66)
barrier_top.setPosition(8, 38)
barrier_top_2.setPosition(24, 38)
barrier_top_3.setPosition(40, 38)
barrier_top_4.setPosition(56, 38)
barrier_top_5.setPosition(72, 38)
barrier_top_6.setPosition(88, 38)
barrier_top_7.setPosition(104, 38)
barrier_top_8.setPosition(120, 38)
barrier_top_9.setPosition(136, 38)
barrier_top_10.setPosition(152, 38)
barrier_back.setPosition(-3, 52)
barrier_front.setPosition(163, 52)
