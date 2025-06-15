
type Props = {
    showSuggestions: boolean;
    suggestion: string;
    handleSuggestionsClick: (value: string) => void;
    error?: string;
}

export default function SuggetionBox({ showSuggestions, suggestion, handleSuggestionsClick, error }: Props) {
    console.log(suggestion,showSuggestions)
    return (
        <>{(showSuggestions && suggestion) ?
            <ul className='mb-4 bg-white absolute border top-[44px] left-0 min-w[200px] flex flex-col gap-1 py-2 px-2'>
               
                        <li
                           
                            onClick={() => handleSuggestionsClick(suggestion)}
                            className='cursor-pointer p-1 rounded hover:bg-blue-500'>
                          {suggestion}
                        </li>
                    
            </ul>
            : (error && !suggestion ) ?
                <ul className='mb-4 bg-white absolute border top-[44px] left-0 min-w[200px] flex flex-col gap-1 py-2 px-2'>
                    <li className='text-red-500 p-1 '>{error}</li>
                </ul>
                : ""
        }
        </>
    )
}