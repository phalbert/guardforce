
const Card = ({ title, description, image, link }: any) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function Work() {
    return (
        <main>
            <h1 className="mb-4 text-xl font-semibold">Our Work</h1>
            <div className="grid grid-cols-1 grid-cols-3 gap-4">
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/226/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
                <Card title="Security" image="https://placeimg.com/400/225/arch" link="/" />
            </div>
        </main>
    );
}
