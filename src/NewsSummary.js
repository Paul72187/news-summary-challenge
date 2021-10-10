@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap'); *
{
    margin: 0;
    padding: 0;
    box - sizing: border - box;
    font - family: 'Kalam',
    cursive;
}
body {
    height: 100 vh;
    background - image: url(. / resources / images / Appunti_background.png);
    overflow: hidden;
}
.container {
    height: 100 vh;
    display: flex;
    flex - direction: column;
    align - items: center;
}
h1 {
    margin: 30 px;
}
.noteSection {
    display: grid;
    grid - template - columns: repeat(4, 1 fr);
    justify - items: center;
    grid - column - gap: 50 px;
}
.noteColumn {
    display: flex;
    flex - direction: column;
    align - items: center;
    width: 300 px;
}
.yourNotes {
    grid - column: 2 / 3;
}
.addNotes {
    grid - column: 3 / 4;
}
h2 {
    text - decoration: underline;
}#
yourNotes {
    overflow: auto;
    margin - left: 15 px;
    margin - right: -2000 px;
    padding - right: 2000 px;
    height: 450 px;
}
card {
    display: grid;
    grid - template - rows: 30 px 60 px 30 px;
    border: 3 px solid #000000;

	box-sizing: border-box;

	box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);

	border-radius: 5px;

	width:250px;

	padding: 10px;

	margin: 25px;

}

.noteTitle{

	text-align: center;

}

button{

	border:none;

	background-color: transparent;

	margin-left: 190px;

	cursor: pointer;

}

# titleInput {
        background - color: transparent;
        border: none;
        width: 100 % ;
        max - height: 30 px;
        border - radius: 1 % ;
        cursor: pointer;
        text - align: center;
        font - size: 1.17e m;
        font - weight: bold;
        overflow: hidden;
    }
    textarea {
        background - color: transparent;
        border: none;
        height: 60 px;
        padding: 5 px;
        cursor: pointer;
    }


    @media only screen and(max - width: 630 px) {
        body {
            overflow: scroll;
            margin - right: -2000 px;
            padding - right: 2000 px;
        }
        .noteSection {
            display: flex;
            flex - direction: column - reverse;
            align - items: center;
            grid - column - gap: 0 px;
        }
    }