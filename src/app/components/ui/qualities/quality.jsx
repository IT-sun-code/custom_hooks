import React from "react";
import PropTypes from "prop-types";
// добавила кастомный хук для качеств
import { useQualities } from "../../../hooks/useQualities";

// деструктуризируем только id, затем деструктуризируем color и name из полученного по id качества
const Quality = ({ id }) => {
    const { getQuality } = useQualities();
    const { color, name } = getQuality(id);
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

// удалила color и name, тк принимаем мы только id
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
