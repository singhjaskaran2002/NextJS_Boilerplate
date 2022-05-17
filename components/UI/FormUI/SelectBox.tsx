export interface SelectOptions {
	title: string;
	value: string;
}

interface SelectBoxProps {
	label: string;
	formik: any;
	name: string;
	id: string;
	options: Array<SelectOptions>;
}

/**
 * returns select box
 */
const SelectBox: React.FC<SelectBoxProps> = ({
	label,
	formik,
	...fieldProps
}) => {
	return (
		<div className="form-group">
			<label htmlFor={fieldProps.id}>{label}</label>
			<select
				className="form-select"
				name={fieldProps.name}
				id={fieldProps.id}
				value=""
				onChange={formik.handleChange}
			>
				<option value="" disabled>
					Select job type
				</option>
				{fieldProps.options.map(
					(jobType: SelectOptions, index: number) => (
						<option key={index} value={jobType.value}>
							{jobType.title}
						</option>
					)
				)}
			</select>
			{formik.touched[fieldProps.name] &&
			formik.errors[fieldProps.name] ? (
				<div className="error-block">
					{formik.errors[fieldProps.name]}
				</div>
			) : null}
		</div>
	);
};

export default SelectBox;
