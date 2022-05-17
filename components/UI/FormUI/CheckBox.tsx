interface CheckBoxProps {
	formik: any;
	[propKey: string]: any;
}

/**
 * return check box tsx
 */
const CheckBox: React.FC<CheckBoxProps> = ({
	formik,
	children,
	...fieldProps
}) => {
	return (
		<div className="form-group">
			<input {...fieldProps} onChange={formik.handleChange} />
			{children}
		</div>
	);
};

export default CheckBox;
