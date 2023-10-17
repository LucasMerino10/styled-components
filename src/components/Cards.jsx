import styled from 'styled-components';

    const Section = styled.section`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    `

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        width: 200px;
        box-shadow: 0 0 5px black;
        background-color: whitesmoke;
        border-bottom-right-radius: .5rem;
        border-top-left-radius: .5rem;
    `;

    const Card__Img = styled.img`
        height: 150px;
        border-top-left-radius: .5rem;
    `;

    const Card__Title = styled.p`
        color: black;
        text-shadow: 1px 1px 2px black;
    `;

function Cards() {

    const cats = [
        {title: "Cat 1", imgSrc: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"},
        {title: "Cat 2", imgSrc: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png"},
        {title: "Cat 3", imgSrc: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg"}
    ]

    return (
        <Section>
            {cats.map((cat, index) => (
                <Card key={index}>
                <Card__Img src={cat.imgSrc} alt="" />
                <Card__Title>{cat.title}</Card__Title>
                </Card>
            ))}
        </Section>
    )
    
}

export default Cards