import { types } from 'mobx-state-tree';

const NumberRange = types
    .custom({
      name: "NumberRange",
      fromSnapshot(snapshot) {
        if (Array.isArray(snapshot) && snapshot.length === 2) {
          const [min, max] = snapshot;
          return { min, max };
        }
        return { min: 0, max: 0 };
      },
      toSnapshot(value) {
        return [value.min, value.max];
      },
      isTargetType(value) {
        return !!value && typeof value === 'object' && 'min' in value && 'max' in value;
      },
      getValidationMessage(value) {
        if (!Array.isArray(value) || value.length !== 2) {
          return 'Value must be an array with two elements representing min and max.';
        }
        return "";
      },
    });

export const NumberRangeModel = NumberRange;
