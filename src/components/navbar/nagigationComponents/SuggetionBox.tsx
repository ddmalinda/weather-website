
type Props = {
    showSuggestions: boolean;
    suggestion: string;
    handleSuggestionsClick: (value: string) => void;
    error?: string;
}

export default function SuggetionBox({ showSuggestions, suggestion, handleSuggestionsClick, error }: Props) {
    return (
        <>{(showSuggestions && suggestion) ?
            <ul className='mb-4 bg-white  hover:bg-gray-400 hover:text-white transition delay-100  absolute border top-[44px] left-0 min-w-[220PX] rounded-xl flex flex-col py-2 px-2'>
                <li
                    onClick={() => handleSuggestionsClick(suggestion)}
                    className='cursor-pointer p-1 rounded'>
                    {suggestion}
                </li>
            </ul>
            : (error && !suggestion) ?
                <ul className='mb-4 bg-white  hover:bg-gray-400 hover:text-white transition delay-100  absolute border top-[44px] left-0 min-w-[220PX] rounded-xl flex flex-col py-2 px-2'>
                    <li className='text-red-500 p-1 '>{error}</li>
                </ul>
                : ""
        }
        </>
    )
}