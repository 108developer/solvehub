import useAuthStore from '@/store/store';
import { useState } from 'react';

const PageModal = ({ closeModal, onSubmit }) => {
    const { serviceData, updateService } = useAuthStore();

    const ServicesFields = [
        { name: 'title', label: 'Title', value: serviceData.title, required: true },
        { name: 'slug', label: 'Slug', value: serviceData.slug, required: true },
        { name: 'metaTitle', label: 'Meta Title', value: serviceData.metaTitle, required: true },
        { name: 'metaDescription', label: 'Meta Description', value: serviceData.metaDescription, required: true },
        { name: 'metaKeywords', label: 'Meta Keywords', value: serviceData.metaKeywords.join(', '), required: false },
        { name: 'paragraphs', label: 'Paragraphs', value: serviceData.paragraphs, required: false }, // Array of paragraphs
        { name: 'faqs', label: 'FAQs', value: serviceData.faqs, required: false } // FAQs as array of objects (question and answer)
    ];

    // Initialize form state dynamically based on the fields
    const [formState, setFormState] = useState(
        ServicesFields.reduce((acc, field) => {
            acc[field.name] = field.value || (Array.isArray(field.value) ? [] : '');
            return acc;
        }, {})
    );

    // Handle input changes for simple fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Handle input changes for array fields (paragraphs and FAQs)
    const handleArrayChange = (fieldName, index, key, value) => {
        const updatedArray = [...formState[fieldName]];
        if (key) {
            updatedArray[index][key] = value; // For FAQs with question/answer
        } else {
            updatedArray[index] = value; // For paragraphs
        }
        setFormState({
            ...formState,
            [fieldName]: updatedArray,
        });
    };

    // Add a new entry for array fields (paragraphs and FAQs)
    const addArrayField = (fieldName, initialValue) => {
        setFormState({
            ...formState,
            [fieldName]: [...formState[fieldName], initialValue],
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const update = { slug: serviceData.slug, formState };
        updateService(update);
        onSubmit(formState); // Call the onSubmit function passed as a prop with form data
        closeModal(); // Close the modal after submission
    };

    return (
        <div
            className="fixed z-[100] inset-0 flex justify-end bg-gray-800 bg-opacity-50"
            onClick={closeModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-1/3 h-screen overflow-y-auto p-6 flex flex-col"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Content</h2>
                <form onSubmit={handleSubmit} className="flex-1">
                    {ServicesFields.map((field) => (
                        <div className="mb-4" key={field.name}>
                            <label className="block text-gray-600 mb-2" htmlFor={field.name}>
                                {field.label}:
                            </label>

                            {/* Check if the field is an array */}
                            {Array.isArray(field.value) ? (
                                <>
                                    {field.name === 'faqs' ? (
                                        <>
                                            {formState[field.name].map((faq, index) => (
                                                <div key={index} className="mb-4">
                                                    {/* FAQ question input */}
                                                    <input
                                                        type="text"
                                                        value={faq.ques}
                                                        onChange={(e) =>
                                                            handleArrayChange(field.name, index, 'question', e.target.value)
                                                        }
                                                        className="w-full text-black outline-none p-2 border border-gray-300 rounded mb-2"
                                                        placeholder={`Enter FAQ Question ${index + 1}`}
                                                    />
                                                    {/* FAQ answer input */}
                                                    <textarea
                                                        value={faq.ans}
                                                        onChange={(e) =>
                                                            handleArrayChange(field.name, index, 'answer', e.target.value)
                                                        }
                                                        className="w-full text-black outline-none p-2 border border-gray-300 rounded"
                                                        placeholder={`Enter FAQ Answer ${index + 1}`}
                                                    />
                                                </div>
                                            ))}
                                            {/* Add new FAQ entry */}
                                            <button
                                                type="button"
                                                onClick={() => addArrayField(field.name, { question: '', answer: '' })}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Add FAQ
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {formState[field.name].map((item, index) => (
                                                <div key={index} className="mb-2">
                                                    <input
                                                        type="text"
                                                        value={item}
                                                        onChange={(e) =>
                                                            handleArrayChange(field.name, index, null, e.target.value)
                                                        }
                                                        className="w-full text-black outline-none p-2 border border-gray-300 rounded"
                                                        placeholder={`Enter ${field.label} ${index + 1}`}
                                                    />
                                                </div>
                                            ))}
                                            {/* Add new item for other arrays (e.g., paragraphs) */}
                                            <button
                                                type="button"
                                                onClick={() => addArrayField(field.name, '')}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Add {field.label}
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : (
                                <input
                                    type={field.type || 'text'}
                                    id={field.name}
                                    name={field.name}
                                    value={formState[field.name]}
                                    onChange={handleChange}
                                    className="w-full outline-none p-2 border text-black border-gray-300 rounded"
                                    required={field.required || false}
                                />
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                    >
                        Update Content
                    </button>
                </form>

                <button
                    onClick={closeModal}
                    className="mt-4 w-full text-center text-blue-600 hover:underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PageModal;
