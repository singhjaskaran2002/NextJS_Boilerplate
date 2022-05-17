interface TextAreaProps {
	label: string;
	formik: any;
	name: string;
	id: string;
	placeholder: string;
	rows: number;
	cols: number;
	onChange: any;
}

/**
 * returns text area
 */
const TextArea: React.FC<TextAreaProps> = ({
	label,
	formik,
	...fieldProps
}) => {
	return (
		<div className="form-group">
			<label htmlFor={fieldProps.id}>{label}</label>
			<textarea className="form-control" {...fieldProps} />
			{formik.touched[fieldProps.name] &&
			formik.errors[fieldProps.name] ? (
				<div className="error-block">
					{formik.errors[fieldProps.name]}
				</div>
			) : null}
		</div>
	);
};

export default TextArea;
