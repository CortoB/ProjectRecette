const Th = (props) => (
  <th
    className="p-2 bg-[#8A1A0C] border-2 border-[#373234] font-bold"
    {...props}
  />
);

const Td = (props) => (
  <td className="border-r border-b bg-green-300 text-center" {...props} />
);

const Table = () => {
    return (
      <table className="flex justify-center">
            <thead>
                <tr>
                    <Th>Nom de vos recettes</Th>
                </tr>
            </thead>
        </table>
    )
}

export default Table