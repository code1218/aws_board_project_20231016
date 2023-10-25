package com.korit.board.dto;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
public class WriteBoardReqDto {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    @Min(0)
    private int categoryId;
    @NotBlank
    private String categoryName;
}
