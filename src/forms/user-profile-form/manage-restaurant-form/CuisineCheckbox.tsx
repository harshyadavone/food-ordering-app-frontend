import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, cuisine]);
    } else {
      field.onChange(field.value.filter((value: string) => value !== cuisine));
    }
  };

  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className=""
          checked={field.value.includes(cuisine)}
          onCheckedChange={handleCheckboxChange}    
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
