const CountryList = ({ countries }) => {
    <ul>(countries.map(country => {
        <li key=country.id>country.name</li>})
    )
    </ul>
};

export default CountryList;