function GetComponent() {
    const { isLoading, items, isError, error } = useCustomHook(); // Ensure this data comes from a hook or prop

    if (isLoading) return <p>Loading ...</p>;
    if (isError) return <p>{error}</p>;
    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}
export default GetComponent;
