interface TextFieldProps {
	label: string;
	placeholder: string;
	type: string;
	formik: any;
	id: string;
	name: string;
	className?: string;
	onChange?: any;
}

/**
 * returns text field input
 */
const TextField: React.FC<TextFieldProps> = ({
	label,
	formik,
	className,
	...props
}) => {
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{label}</label>
			<input
				className={className ? className : "form-control"}
				{...props}
			/>
			{formik.touched[props.name] && formik.errors[props.name] ? (
				<div className="error-block">{formik.errors[props.name]}</div>
			) : null}
		</div>
	);
};

export default TextField;
