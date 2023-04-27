export default function Header() {
    const year = new Date().getFullYear();

    return (<footer className="hugs-bottom colored-background footer">
        <p>
            &copy;
            {year}
            {' '}
            Switchfully
        </p>
    </footer>);
};