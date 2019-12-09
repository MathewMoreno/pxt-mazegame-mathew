sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 6; index++) {
        otherSprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    }
    info.startCountdown(30)
})
let otherSprite: Sprite = null
scene.setTileMap(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 8 8 8 8 8 7 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 8 8 8 8 8 7 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 e e 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 e 7 2 4 7 e 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 e 7 4 2 7 e 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 c 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`)
scene.setTile(12, img`
b b c c c c c c c c c c c c c b 
c b b c c c c c c c c c c c b b 
c c b b c c c c c c c c b b c c 
c c c b c c c c c c c c b c c c 
c c c b b c c c c c b b c c c c 
c c c c b b c c c b c c c c c c 
c c c c c c b c b c c c c c c c 
c c c c c c c b b c c c c c c c 
c c c c c c b b b c c c c c c c 
c c c c c c b c b b c c c c c c 
c c c c c b c c c c b b c c c c 
c c c c b b c c c c c b b c c c 
c c c b b c c c c c c c b c c c 
c b b b c c c c c c c c c b c c 
b b c c c c c c c c c c c c b c 
b c c c c c c c c c c c c c c b 
`, true)
scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e b e e e e e e e b e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e b e e e e 
e e e e b e e e e e e e b e e e 
e e e b e e e e e e e e b e e e 
e e e b e e e e e e e e b b e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 5 7 7 7 5 7 7 7 5 7 7 7 5 7 
7 5 7 7 7 5 7 7 7 5 7 7 7 7 5 7 
7 5 7 7 7 5 7 7 5 5 7 7 7 5 7 7 
7 7 7 7 7 7 7 7 5 7 7 7 7 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
`, false)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 8 9 9 8 8 8 8 8 9 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 9 9 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 9 8 8 8 8 8 8 9 9 8 8 8 8 8 8 
8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 8 8 9 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 9 9 8 8 8 8 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 5 9 5 5 9 5 5 5 5 f . 
. f 5 5 5 5 9 5 5 9 5 5 5 5 f . 
. f 5 5 5 5 9 5 5 9 5 5 5 5 f . 
. f 5 5 5 5 9 5 5 9 5 5 5 5 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 9 5 5 5 5 5 5 9 5 5 f . 
. f 5 5 5 9 9 9 9 9 9 5 5 5 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
. f f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 6; index++) {
    otherSprite = sprites.create(img`
. . . . . . . . . . . . . 6 6 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c 8 6 7 7 f . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 6 7 7 f . . . . . . . . . . . . . . . 
. . . . . . . . . . f 6 6 7 7 6 f . . . . . . . . . . . . 6 6 6 
. . . . f f f f f f 6 6 6 6 6 6 f f . . . . . . . . . 6 6 8 8 6 
. . f f 7 7 7 7 7 7 7 7 7 7 7 7 7 c f f f . . . . . 6 8 8 8 6 . 
f f 7 7 7 7 7 7 7 7 7 6 7 6 7 7 7 7 6 6 6 f f . . 6 8 8 8 8 f . 
f 7 6 7 7 7 7 b f f 7 7 6 7 6 7 7 7 6 6 6 6 6 f f f 8 8 8 f . . 
f 7 7 7 1 1 1 1 f f 1 7 6 7 6 7 7 7 6 6 6 6 6 6 6 8 8 8 6 f . . 
. f 7 1 1 1 1 1 1 1 1 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 8 6 6 f . . 
. . f 6 6 6 3 3 6 6 1 1 7 7 7 7 6 6 6 6 6 6 6 6 f f f 8 8 6 f . 
. . . f 6 1 3 1 6 1 1 1 7 7 7 6 6 6 6 6 8 8 8 6 . . . f 8 8 f . 
. . . . f 3 3 6 1 1 1 6 7 7 7 f 8 8 8 8 8 6 6 . . . . . f 8 8 f 
. . . . . f f 1 1 1 1 f 7 8 7 7 f 8 8 6 6 . . . . . . . . f f f 
. . . . . . . 6 6 6 6 6 f 8 8 7 7 f 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    otherSprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    otherSprite.z = 1
}
info.startCountdown(30)
