export interface RadioButtonItems {
	id: number;
	key: string;
	value: string;
}

interface RadioButtonProps {
	label: string;
	formik: any;
	options: Array<RadioButtonItems>;
	name: string;
}

/**
 * return radio buttons
 */
const RadioButton: React.FC<RadioButtonProps> = ({
	label,
	formik,
	...fieldProps
}) => {
	return (
		<div className="form-group">
			<label>{label}</label>
			{fieldProps.options.map((item: RadioButtonItems, index: number) => {
				return (
					<div className="radio-button-div" key={index}>
						<input
							{...fieldProps}
							type="radio"
							id={item.value}
							value={item.value}
							onChange={formik.handleChange}
						/>
						<span className="radio-button-labels">{item.key}</span>
					</div>
				);
			})}
			{formik.touched[fieldProps.name] &&
			formik.errors[fieldProps.name] ? (
				<div className="error-block">
					{formik.errors[fieldProps.name]}
				</div>
			) : null}
		</div>
	);
};

export default RadioButton;
