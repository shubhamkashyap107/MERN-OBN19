const container = document.getElementById("main")


fetch('https://hp-api.onrender.com/api/characters')
.then((res) => {
    return res.json()
})
.then((data) => {
    for(let item of data)
    {
        // console.log(item)

        const card = document.createElement("article")
        const name = document.createElement("h2")
        const img = document.createElement("img")

        img.src = item.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACUCAMAAAAanWP/AAAAaVBMVEX///8AAAC8vLz8/PwEBAT5+fnx8fG5ubns7Ozd3d1cXFz29vZjY2PMzMzl5eW/v79ISEiYmJg6OjosLCwjIyNwcHCysrLV1dXFxcWlpaUaGhqNjY2rq6tVVVVBQUE1NTV9fX0TExOFhYWgMyA7AAAEgklEQVR4nO2cC3OiMBCAk4bwkqfyFBXb//8jLwlYtYKklkvWmf2m9W7sdO5j3SSbJRwhCIIgCIIgCIIgCIIgiCkYs22AvA9syBeW1E2TNnVyfR88UpxxwtzmKyuoosjOjS/ffQ99xniQ7+gduzzghNuWW4RJxyTvKXUchzrqlcpvus2T5V+3jgi+F8p4K3s6vKhXGla25RYR6d0Wl4xx7hOI7lvwi8Cm+yl9uRb5GXxxwNOPiOwmfwz6jT/tNrYln8Hbz3l7+bVv4U4/nDT9MM3MZg/dxQTs+uWHM+o3RC6Dqc9Ju6Cu0j+HGX2xYs0O2zt/oNEnh2V7+XWw7TmNe1zSHzi6IKPfFDr6Di0a26aT5HR+1rwjt206Sbk4csfwl+CSRwglR93oH8GVzkI/yPRGLqVZYFv3J0I/3urJi51LbFv3B2zQ14w+OH0Zfl19B56+rAPqk27ynGrbvhOIoasJvKFLVLWsmfuhb9t1Cs1li9IzuGVL0jqay24OsmKui2V1SQFx5BKZPVoVZ2nbc4Zm9FsgBZk7Qmp36Qc+Ywd0s8hJRceu5pPUoR5MeyG1OS/kjvjh2YWpL+u24LSU+6eAge3zcxL3z/W3DVx7Aav6sR0ylTi0r4A3yJlXyGbUo758p/Bgdti+YYzF/dyeV2QOh31/TmZ2UF7jffu3MpBXB1pfwdJQlj/DXbmxjitCmM2pR0R83Y8y21+z5jMrP1x5w9S2mg4qQdy6yssoO52ysMyrejNsKN8BNmY485NAkKiOrLzT/h76CIKosXoZsW80cK+TzHgF7Hs+gg+bmCOHqdSCzCsw7vp+EqeeII0D33c5fP3Rjif1oSvvGrbbKK/iBPRxjMv5O6+L+ql6uY++vICNNQU4lBSPu3B/Xyzfsj92DQd5JEkpedHOuRwdedxuqfeKqALoL7skXjZqTtt/b8GOH7AKZ5nNm7gck8aZ6VQ51z/KGE79qer4pNtPGE+i9l5dMvyqfUQYeRPq3poYs4tGMZghwNvZ5sKU/PDdy1Nt1v1F6rhnR9/++gE4Z59YvgA5aAONA2zTRInlzon4t5OMTjXVdD4Cmlk+mzHG/jV7cdHH2u74DSL627y/8ac0DGw1nGXW+uVL4jeU6linjU+AEffP9o7wt9TBYqx9Me1v9Wlua/ZJ6auTzlVfzP+pneHrax8heapPM9+GP+/+bj/Q2Yh+uvtr4l/YNeaHrh+tZS+qB7MHfGSsqv2ry9Ujnwej0ZelzvHPk+Y3jumDqcPxhbUQYTiYzH6xSq4waV71RfhNtrAYiddLnaEH0RjcuXCy4rQzEJlcugLtvoIu+8Rg9i89IvQCJgfvy9vbeUJD+rIptV1vybqwNTf1q0MvK+vLwzImEDNEvrq8mD47U8njap03/S1y12hEX9Y7a2Os7hFLrvaDBr/hZOaZCkZSzbPWv0AkY5Ea0l+z2rzByH8kwP7LmivD35rRZ+rhxNWhuZGZk6/XYrinM9DtZIxtvt5XX/oH3sd/wDPyOBSse7IIgiAIgiAIgiAIgiAIAoB/NOMxnJ24ASwAAAAASUVORK5CYII="
        name.innerText = item.name

        img.style.height = "200px"

        card.append(img, name)
        container.append(card)
    }
})